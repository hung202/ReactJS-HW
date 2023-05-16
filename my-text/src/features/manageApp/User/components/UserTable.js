import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeArticleItem, removeUserItem } from '../actions';
import { AddNewArticleForm } from './AddNewArticleForm';

export const UserTable = () => {

  const userList = useSelector((state) => state.manageUser.users)
  const dispatch = useDispatch();

  const handleRemoveArticleItem = (userId, article) => {
    dispatch(removeArticleItem({
      articleId: article,
      id: userId
    }))
  }

  const handleRemoveUser = (userId) => {
    dispatch(removeUserItem(userId))
  }

  return (
    <table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Articles</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          userList && userList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.info}</td>
                <td>
                  <div>
                    <AddNewArticleForm 
                      userId={user.id}
                    />
                    <ul>
                      {
                        user.articles && user.articles.map((article, index) => {
                          return (
                            <li key={`${article}-${index}`}>
                              <div style={{
                                display: 'flex'
                              }}>
                              {article.name} - <button onClick={() => { handleRemoveArticleItem(user.id, article.id) }}>Delete</button>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </td>
                <td>
                  <button onClick={() => { handleRemoveUser(user.id) }}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}