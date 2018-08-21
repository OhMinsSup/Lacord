# 백엔드

## 스택

* koa
* typeorm
* typescript
* prettier
* postgresql
* jsonwebtoken

* build
    * webpack

* Test Framework
    * jest
    * supertest


## EP.1

회원가입 로직은 소셜 회원가입을 제외하고는 거의 완성됬다. 그리고 테스트 코드 상에서도 잘 돌아가서 만족스럽게 되는 것 같다. 근데 문제는 플레너 일정을 만드는 건데... db 설계하는데 조금 시간이 걸릴 것 같다.

왜냐하면 이런식으로 설계해야하는데 .... 정말 이게 맞는지 좀 생각해봐야 겠다. 그리고 필요한 데이터들을 설정해야하는데 막상 떠오르는게 없다....


>  Post ->  User <- Calendar -> Post[]

## EP.2

일단 한번 생각해보니깐. Post랑 Calendar랑 굳이 같이 갈 필요는 없는것 같다. 왜냐하면 Post는 여행 후기에 관련된 것을 적으면 되고, calendar는 일정을 짜기위한 테이블로 존재하면 될 것 같다.
이렇게 생각하니깐 테이블을 쉽게 작성할 수 있는 것 같다.

일단 Calendar 테이블에다가는 생각해본게 있눋데, 일정을 짤떄 내가 여행하는 기간이 전부 제각각인데, 이걸 테이블로 만들어서 일정을 만들면 좋을 것 같다는 생각이든다. 예를들면 만약 내가 3일간의 일정을 짠다면 1일 2일 3일의 데이블을 만들고 각 날짜마다의 
지역의 장소를 좌표, 지역이름, google maps의 데이터를 저장하는 것입니다.

뭐 일단은 후기 부분을 먼저 만들고 일정을 만들어야 겠다.
    