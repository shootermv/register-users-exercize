import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, sortParams } from "../../store/actions";
import { sortedUsersSelector, sortSelector } from "../../store/selectors";
import Caret from "./Caret";
import "./UsersPage.css";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(sortedUsersSelector);
  const {orderBy: sortBy, asc} = useSelector(sortSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, sortBy]);
  
  const setSortParams = field => {
    dispatch(sortParams(field));
  }

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortParams("name")}>Name{sortBy === "name" && <Caret asc={asc}/>}</th>
            <th onClick={() => setSortParams("email")}>Email{sortBy === "email" && <Caret asc={asc}/>}</th>
            <th onClick={() => setSortParams("age")}>Age{sortBy === "age" && <Caret asc={asc}/>}</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, email, age, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsersPage;
