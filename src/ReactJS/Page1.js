import React from "react";
import Header from "./Buổi 4 (6-1)/BTVN/Header";
import MainContent from "./Buổi 4 (6-1)/BTVN/MainContent";
import Aside from "./Buổi 4 (6-1)/BTVN/Aside";
import Boxes from "./Buổi 4 (6-1)/BTVN/Boxes";
import Footer from "./Buổi 4 (6-1)/BTVN/Footer";
const URL1 =
  "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-5-638638962363556047-750x500.jpg";
const URL2 =
  "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/305658/iphone-15-pro-max-titan-den-2-638629415797228950-750x500.jpg";
const URL3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhUxuQkpPfTGGFQSVhI3nTy_46-aH6Tj-Zw&s";

const Page1 = () => {
  const products = [
    {
      name: "iPhone 16 Pro 128GB",
      discount: "Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ",
      price: "22990000",
      link: URL1,
    },
    {
      name: "iPhone 15 Pro",
      discount: "Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 6.000.000 VNĐ",
      price: "24990000",
      link: URL2,
    },
    {
      name: "Laptop Pro",
      discount: "Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 7.000.000 VNĐ",
      price: "23990000",
      link: URL3,
    },
  ];
  return (
    <>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <MainContent />
          <Aside />
        </div>
        <Boxes />
        <Footer />
      </div>
      <div className={style["product-item"]}>Hello</div>
      {/* <div className="app"> */}
      {/* <Product
            name="iPhone 16 Pro 128GB"
            price="2000000"
            discount="Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ"
            link={URL1}
          />
          <Product
            name="iPhone 16 Pro 128GB"
            price="2000000"
            discount="Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ"
            link={URL1}
          />
          <Product
            name="iPhone 16 Pro 128GB"
            price="2000000"
            discount="Giảm 10% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ"
            link={URL1}
          /> */}
      {/* {products.map((item) => {
            return <Product {...item} />;
          })}
        </div>
        <DemoChildren>
          <h1>Hello</h1>
          <h1>Siuuuuuu</h1>
        </DemoChildren> */}
      {/* <ul>
          <li>
            <Comp1 title="UI/UX Design" icon="✿" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </li>
        </ul>
        <ul>
          <li>
            <Comp1 title="Web Development" icon="☠" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </li>
        </ul>
        <ul>
          <li>
            <Comp1 title="Branding" icon="✉" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </li>
        </ul>
        <ul>
          <li>
            <Comp1 title="Photography" icon="✈" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </li>
        </ul>
        <ul>
          <li>
            <Comp1 title="Apps Development" icon="☻" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </li>
        </ul>
        <ul>
          <li>
            <Comp1 title="Digital Marketing" icon="☃" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </li>
        </ul>


      <Comp2 /> */}

      {/* <div>
        <Avatar link = {URL3} />
        <Avatar link = {URL2} />
        </div> */}
      {/* <NewComponent/> */}
      {/* <Cha/> */}
      {/* <h1 style = {{backgroundColor : "red"}}>Hello</h1>
        <button onClick = {log}>Click Here</button> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <button onClick = {log()}>Click Here (false)</button>  gọi hàm thực thi ngay lập tức khi reLoad trang */}
    </>
  );
};

export default Page1;
