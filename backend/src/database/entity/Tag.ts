import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Index } from 'typeorm';
import Post from './Post';

@Entity('tag')
class Tag {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    public name: string | null;

    @ManyToMany(type => Post, post => post.post_tags, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
    })
    @JoinTable({
        name: 'post_tags'
    })
    public posts: Post[] | null;
}

export default Tag;
