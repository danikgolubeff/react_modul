import React from "react";

const MainLayout = (props) => {
  const { name, age, friends } = props;
  console.log(props);
  return (
    <div>
      <p>Hello, my name is {name}</p>
      <p>My age is - {age}</p>
      <div>
        My friends{" "}
        {friends.map((friend, index) => {
          return <div key={index}> {friend}</div>;
        })}
      </div>
    </div>
  );
};

export default MainLayout;
