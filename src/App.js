// import logo from './logo.svg';
import './App.css';
//import Test from './test'


/*스타일 테스트*/
const style = {
  width: "120px",
  height: "120px",
  backgroundColor: "#000000",
  color:"#ffffff",
  textAlign:"center",
  marginBottom:"20px"
};

const test_arr = ['가','나','다','가나'];
console.log(test_arr.join(", "));

const test_arr_ga = test_arr.filter(test_arr=> test_arr[0] === '가');
console.log(test_arr_ga);

const test_arr_plus = test_arr.map(test_arr => `${test_arr}는 한글`);
console.log(test_arr_plus.join(', '));

const test_arr_plus_2 = test_arr.map(test_arr => ({name: test_arr}));
console.log(test_arr_plus_2);


const hangeul = [
{name: '가'},
{name: '나'},
{name: '다'},
{name: '라'},
];

console.log(hangeul);

const editName = (oldNm,name,arr) => 
  arr.map(item => {
    if(item.name === oldNm) {
      return {...item, name};
    } else {
      return item;
    }
  });


const updateHangeul = editName('가','(수정)가', hangeul);

console.log(updateHangeul[0]);
console.log(hangeul[0]);
console.log(hangeul)






function App() {
  return (
    <div style={style}></div>
  )
}




export default App;
