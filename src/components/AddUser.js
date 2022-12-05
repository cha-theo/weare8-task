import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddUser(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let users = props.usersData;

  const navigate = useNavigate();


  const onSubmit = (data) => {
    users = users.concat(data);
    console.log(users);
    navigate("/");
  };

  return (
    <>
      <div className="add-user">
        <h1>Add a new user</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="First Name"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && <span>This field is required</span>}
          <br />
          <input
            placeholder="Last Name"
            {...register("last_name", { required: true })}
          />
          {errors.last_name && <span>This field is required</span>}
          <br />
          <input
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <input
            placeholder="Image"
            {...register("avatar", { required: true })}
          />
          {errors.avatar && <span>This field is required</span>}
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default AddUser;
