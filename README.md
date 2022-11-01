# Next.js 완정정복

## 1. Next.js와 React의 차이를 살펴보기 전에 라이브러리와 프레임워크의 차이를 살펴보자!

- React.js는 라이브러리를 표방
  - React공식 홈페이지에서도 A JavaScript library for building user interfaces라는 설명을 확인할 수 있습니다.

### 1-1 프레임워크와 라이브러리의 차이

|프레임워크|라이브러리|
|------|---|
|기반구조|개발 편의 도구들|
|제어 주도권을 프레임워크가 가짐|제어 주도권을 사용자가 가짐|
|자유도가 상대적으로 적음|자유도가 상대적으로 큼|

=> 정리하면
- 리액트의 경우 개발자가 상태를 어떻게 관리를 하고 싶은지에 대한 주도권을 가질 수 있습니다.
- 반면, 넥스트의 경우 페이지 이동을 어떻게 처리할지에 대한 내용은 넥스트.js에서 이미 방법을 제시하고 그 기반 구조를 만들어 놓았습니다.

### 1-2 프레임워크의 장점

- 개인이 해야할 고민들을 프레임워크 개발자가 미리 하고 반영합니다.
- 특정 디자인 패터이나 동작, 기능들을 위한 정의와 방식을 정리해둡니다.
- 여러 개발자가 함께 협업할 때 기준점이 됩니다.

### 1-3 왜 Next.js를 사용할까?
=> 프론트 엔드 개발자들이 가진 고민에 대해 적절한 해결책을 제공
- 규모가 있는 `서비스 구조 설계`를 어떻게 할 것인가?
- 개발환경/ 코드분할 / 파일 기반구조
- SEO(`검색 엔진 최적화`)
- 프론트엔드에 필요한 간단한 API구성
- 손쉬운 `배포` 시스템 Vercel

## 2. 프로젝트 시작

```
$ npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```