import { Context, Middleware } from 'koa';
import * as Joi from 'joi';
import { getCustomRepository } from 'typeorm';
import PostRepository from '../../database/repository/PostRepository';
import { serializePost } from '../../lib/serialized';

export const writePost: Middleware = async (ctx: Context): Promise<any> => {
    type BodySchema = {
        title: string,
        body: string,
        post_thumbnail?: string,
    }

    const schema = Joi.object().keys({
        title: Joi.string().required().min(1).max(120),
        body: Joi.string().required().min(1),
        post_thumbnail: Joi.string().uri().allow(null)
    });

    const result = Joi.validate(ctx.request.body, schema);
    
    if (result.error) {
        ctx.status = 404;
        ctx.body = result.error;
        return;
    }

    const { title, body, post_thumbnail }: BodySchema = ctx.request.body;
    const userId: string= ctx['user'].id;
    const postCustomRespository = await getCustomRepository(PostRepository);

    try {
        const post = await postCustomRespository.writePost(title, body, post_thumbnail, userId);
        const postData = await postCustomRespository.readPostById(post.id);
        ctx.body = serializePost(postData);
    } catch (e) {
        ctx.throw(500, e);
    }
};