// 특정 상품에 대한 인터페이스 정의
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수 정의
function fetchProducts(): Promise<Product[]> {
  // code
}

// 상세 정보 조회를 위한 함수 정의
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