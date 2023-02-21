
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../../Redux/Ducks/GetUser';
import { ReqestDelete } from '../../Redux/Ducks/DeleteUser';



function ViewUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Loading = useSelector((state) => ({ ...state.user }));
    const GetAllData = useSelector((state) => ({ ...state.getAllUsers }));
    const isLog = useSelector((state) => ({ ...state.user.posts }));

        //---------------------------------------------Fetch User----------------------------------------------------------------------------------------
        const fetch = () => {
            dispatch(GetUser(renderUserview));
        }

    //----------------------------------------------Logout-------------------------------------------------------------------------------
    const logout = () => {
        const logout = window.confirm("Are you sure you want to log out?");
        if (logout) {
            sessionStorage.clear();
            navigate('/');
        }

    }

    //---------------------------------------------Delete User----------------------------------------------------------------------------------------
    const renderUserview = () => {
        navigate('/viewUsers');
    }
    const deleteUser = (id) => {
        const logout = window.confirm("Are you sure to delete user?");
        if (logout) {
            dispatch(ReqestDelete(id,renderUserview,fetch));
        }

    }
    useEffect(() => {
        fetch()
    }, [])


    if (Loading.loading) {

        return (
            <>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '50px' }}>User List</h1>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100vw' }}>

                    <div style={{
                        width: '600px',
                        height: 300,
                        overflowY: 'scroll',
                        marginTop:50
                    }}>
                        <table className="table table-bordered table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col-dark">Name</th>
                                    <th scope="col-dark">Email</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    GetAllData.users.map(getUser => (
                                        <tr key={getUser.id}>
                                            <td>{getUser.userName}</td>
                                            <td>{getUser.email}</td>
                                            <td>
                                                <Link to={'/updateUser/' + getUser.id}>
                                                    <button className="btn btn-primary"><AiIcons.AiTwotoneEdit /></button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger"
                                                    onClick={() => {
                                                        deleteUser(getUser.id)
                                                    }}
                                                ><AiIcons.AiTwotoneDelete /></button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <button className="btn btn-danger" onClick={logout}><AiIcons.AiOutlineLogout /> Log Out</button>
                    {/* <Link to={"/signIn"}><button className="btn btn-primary" style={{marginLeft:'5px'}}><AiIcons.AiOutlineUserAdd /> Add User</button></Link> */}
                </div>

            </>
        )
    } else {
        // window.alert("Please Login to Access")
        return (
            <>
                {navigate('/')}
            </>
        )
    }
}

export default ViewUser
