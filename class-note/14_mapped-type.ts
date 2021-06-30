// [기존 타입] 3개의 문자열을 유니언으로 받는 타입
type Heroes = 'Hulk' | 'Capt' | 'Thor'

type HeroAges = { [ K in Heroes ]: number }

const ages: HeroAges = {
  Hulk: 100,
  Capt: 33,
  Thor: 1000
}