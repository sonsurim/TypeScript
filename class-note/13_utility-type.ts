// 특정 상품에 대한 인터페이스 정의
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수 정의
function fetchProducts(): Promise<Product[]> {
  // code
}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// Product 인터페이스에서 타입의 일부만 필요
// 같은 Product 인터페이스를 사용하지만 필요한 타입이 같지 않은 경우가 있음

// AS-IS
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

function displayProductDetail(shoppingItem: ProductDetail) {
  // shoppingItem 타입은 객체로 반드시 위의 3개를 받아옴
  // Product의 일부만 사용하기 때문에 Product 인터페이스 재사용 불가
  // 중복된 코드 증가
}


// TO-BE
type ShoppingItem = Pick<Product, 'id'| 'name' | 'price'>

function pickDisplayProductDetail( shoppingItem: ShoppingItem) {
  // Pick<대상타입, 대상 타입에서 뽑아올 키1 | 대상 타입에서 뽑아올 키2>
  // Product에서 id, name, price 를 뽑아온 타입이 shoppingItem이 됨
}


// 3. 상품의 정보를 업데이트(put)하는 함수
// AS-IS
interface updateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

function updateProductItem(productItem: updateProduct) {
  // Product 인터페이스 중 어느것이든 업데이트 할 수 있음 (업데이트 항목은 랜덤)
}
// TO-BE
type partialUpdateProduct = Partial<Product>
// Product의 모든 속성을 옵셔널 처리

function partialUpdateProductItem(productItem: Partial<Product>) {
  // Product 인터페이스 중 어느것이든 업데이트 할 수 있음 (업데이트 항목은 랜덤)
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// AS-IS
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// TO-BE
// 별도의 인터페이스를 선언하지 않고 아래의 인터페이스를 구현할 수 있음 => 위의 인터페이스 재사용


// 동작 원리 #1
// UserProfile에 이미 속성이 정의되어 있음
// UserProfile의 속성으로 접근하게 되면 타입이 나오게 됨
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// 동작 원리 #2 == 맵드 타입
// UserProfile에 있는 key(타입)에 접근해서 선언한 type의 key로 설정
// type UserProfileUpdate = {
  // 유니온 타입 안에 있는 속성들에 대해 한번씩 반복문을 실행
  // 반복문이 실행될때마다 type의 key는 p (유니온 타입 안의 속성)
  // 선언한 type의 타입(value)은 UserProfile[key]이 됨
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// 동작 원리 #3
// 'username' | 'email' | 'profilePhotoUrl'은 UserProfile의 keyof로 대체 가능
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// }

// 동작 원리 #4
// UserProfile 타입에 국한되지 않게 타입을 넘겨받을 수 있는 형태인 제네릭을 사용
type Subset<T> = {
  [p in keyof T]?: T[p]
}