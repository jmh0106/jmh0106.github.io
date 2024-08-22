---
name: Github Pages 제작기
tools: [Github, jekyll]
image: https://github.com/user-attachments/assets/b78a757f-58a4-47b5-9105-10e0fee9e5bc
description: Github Pages를 활용한 나만의 블로그 제작기입니다.
---


#  블로그 제작기
---

2021년 고등학교를 졸업한 정민호는 고등학교 때 미뤄둔 개발 블로그를 개설하기로 결정하고 큰 마음을 먹고 블로그를 개설한다... 그때 선택한 플랫폼이 바로 **[Hashnode](https://hashnode.com/)** 였다!

비록 하나의 게시물만을 남기고 그 블로그는 영원히 막을 내렸다. 지금 와서 그 이유를 생각해 보자면.

1. 디자인이 내 마음에 들지 않았다.
2. 그렇다고 디자인을 커스텀하는 것도 어려웠다.
3. 너무 거창하게 시작할려고 했다.

**네이버 블로그**는 너무 유명해서 싫고, **Velog**는 커스텀이 자유롭지 못하고, 그래서 선택한 **Hashnode**는 시작만 하고 끝나버렸고... 그래서 커스텀도 잘 되고 작게라도 시작할 수 있는 **Github Pages**를 시작했다! 

~~이때는 몰랐다 이것이 재앙의 시작인 것을...~~

# 개발 시작
---
처음 **Github Pages**를 발견하고 시작한 건 테마를 찾는 것이었다. 처음부터 시작하기에는 **Liquid**와 **Jekyll**에 대해 지식이 전무했기에 테마를 찾고 그걸 수정하는게 편할 것 같았다. 다양한 테마를 찾아보다가 마음에 쏙 드는 테마를 발견했다.

![portforYOU_Pic](https://github.com/yousinix/portfolYOU/raw/master/screenshot.gif)

portforYOU라는 테마인데 알록달록 정갈한게 아주 마음에 들어 바로 선택했다. 

Thank you **[yousinix](https://github.com/yousinix)!**

그렇게 jmh0106.github.io라는 프로젝트를 만들고 나는 들뜬 마음으로 개발을 시작했지만...

# 개발 환경 구축
---
나는 아쉽게도 개발 환경을 구축할 수 없는, 컴퓨터를 끄자마자 모든게 초기화 되는 아주 좋지 않은 상황에 직면해 있었고, 그런 나에게 필요한건 **vscode**, **Java**, **뛰어난 컴퓨터 성능**이었다. 아쉽게도 나는 세가지 전부 가지지 못했기에 github에서 한 땀 한 땀 수정하며 코딩해야 하나 절망에 빠졌지만 그 때 발견한게 온라인 vscode였다!

{% include elements/figure.html image="https://github.com/user-attachments/assets/99359d3d-c5be-485a-b788-ca23c6ef4624" caption="감사해요 마이크로소프트! 당신은 신이에요!" %}

깃허브에서 간단하게 들어갈 수 있는 **Codespaces**로 많이 알고 있는 이 기능을 나는 단 한번도 사용한 적이 없어서 몰랐었고, 그걸 이제야 깨닫게 된 것이었다.

{% include elements/figure.html image="https://github.com/user-attachments/assets/4a0829b8-d8d0-4e39-862e-75b680ec8638" caption="간단하게 프로젝트 화면에서 들어갈 수 있다." %}

나는 내 프로젝트를 열어 테마를 복사하고 그제서야 블로그를 처음으로 열어볼 수 있게 되었다.

# 첫 커밋
---
과연 우여곡절 끝에 올린 첫 커밋을 어땠을까? 당연히 수많은 오류로 가득 차 있었다.

**portforYOU**에 있는 **Docs**에 **Installation** 부분에는 다음과 같은 설명이 있다.

```tree
 <your-username>.github.io/
 ├── _data/
 ├── _posts/
 ├── _projects/
 ├── pages/
 ├── _config.yml
 ├── .gitignore
 └── Gemfile
```

다음과 같은 항목을 제외하고 나머지는 모두 삭제하는 의미인데 나는 그렇게 해놓고, bundle도 install하고 update해도 서버가 빌드되지 않는 것이었다. 오류 창에는 Gemfile이 존재하지 않는다는 말 만 반복했는데, 분명히 존재하는데 무슨 소리인 것인가! 수많은 시행착오 끝에 나는 방법을 찾았고, 곧 절망했다.

나는 바보처럼 ```jmh0106.github.io```라는 프로젝트를 만들고 그 아래에 바로 폴더들을 만든 것이 아니라 ```jmh0106.github.io``` 프로젝트 아래에 ```jmh0106.github.io``` 폴더를 만들고 그 아래에 프로젝트를 생성한 것이었다.

덕분에 나의 6시간은 날라갔고, 프로젝트를 정상적으로 생성하고 블로그를 만들 수 있었다.

# 일기 탭 만들기
---
나는 이 블로그를 개발과 일상을 모두 작성하려고 했었기에 일기 탭을 따로 만들어야 했는데, 그 과정도 설명에 없어서 매우 힘들었다. 어떻게 해야할지 몰라서 먼저 Project 탭을 똑같이 따라한다고 생각하고 하나 더 만들기로 했고. **_config.yml**에 들어가서 일부분을 수정했다.

```
### Collections ###
collections:
  projects:
    output: true
    permalink: /projects/:name
  diarys:
    output: true
    permalink: /diarys/:name
```

일단 Collections에서 diarys를 추가했다.

```
### Defaults for collections ###
defaults:
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "page"
  - scope:
      path: ""
      type: "posts"
    values:
      comments: true                                   # Set to true to enable disqus comments
  - scope:
      path: ""
      type: "diarys"
    values:
      layout: "page"
```

그리고 그 밑에 있는 뭔지 모를 것에서도 diary를 추가하고 layout를 page로 설정했다.

```html
# Diary.html
---
layout: default
title: Diarys
permalink: /diarys/
weight: 3
---

// {% include diarys/index.html %}
```

그리고 pages에서 Diary.html을 추가했다.

마지막으로, **_includes/diarys/index.html**과  **_includes/diarys/diary-card.html**를 만들었다. project 탭에 있는 파일들을 완전히 복사하고 변수명만 바꿔서 붙어넣었다.

{% include elements/figure.html image="https://github.com/user-attachments/assets/8b57d9df-c29f-49bf-9396-107a7192581c" caption="완성된 귀여운 Diarys 탭" %}

# 메인 화면 이미지 수정하기
 ---
 ![image](https://github.com/user-attachments/assets/b619f5ce-5d9b-4aaa-92eb-c3bbd0080178)

본 테마는 메인 화면에 프로필 사진을 올릴 수 있는데, 나는 친구가 그려준 내 프로필을 사용하고 싶어서 내 사진을 적용했다. 

![image](https://github.com/user-attachments/assets/ec04087d-15d1-45d8-a599-cc40efdb63f4)

아주 귀여운 이러한 사진인데 문제는 다크모드로 바꿀 때 발생했다. 

![image](https://github.com/user-attachments/assets/60c8362d-db09-4e4d-a7a8-6f043fbcbf5a)

다크 모드에서 사진 색상을 바꾸는 기능은 없기 때문에 내 귀여운 프로필 사진이 전혀 보이지 않게 되어버린 것이었다. 

나는 첫 번째 해결 방법으로 프로필 사진의 색을 반전 시켜서 흰색으로 만드는 방법을 선택했고, 방안을 찾아봤지만. 색상을 전부 반전시키면 홍조도 색깔이 반전되어버려서 이상해지고 그렇다고 전부 흰색으로 만들면 홍조도 흰색이 되어버렸다. 

그렇게 첫 번째 방법을 실패하고 두 번째 방법 사진을 바꾸는 방법을 선택했다.

1. 일단 검정색, 흰색 사진을 둘 다 준비한다.
2. 다크 모드를 누르면 사진이 바뀐다.

사진 준비는 모두 끝났고. **Javascipt**를 건드릴 시간이다! **assets/js/theme.js** 파일을 만들어서 원래 코드를 모두 붙여넣기 하고 다음과 같은 코드를 추가했다.

```js
// Make imagePaths
const imagePaths = {
  light: "assets/jmhFaceRemoveBg.png",
  dark: "assets/jmhFaceRemoveBgDarkMd.png",
};

// update Image when theme is change
function updateImage(theme) {
  const imageElement = document.querySelector('img[alt="Dvlp_Jeongminho"]');  

  if (imageElement) {
    const imagePath = theme === themes.DARK ? imagePaths.dark : imagePaths.light;
    imageElement.src = imagePath;
  }
}
```

그 후 테마가 바뀔 때마다 **updateImage** 함수를 호출해서 사용했다.

![image](https://github.com/user-attachments/assets/c19c21b2-ed2f-4fa9-bd9d-b1a88e05050d)

이렇게 아주 귀여운 다크모드 프로필 이미지까지 완성되었다!
