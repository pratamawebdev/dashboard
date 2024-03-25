"use client";

import DashboardLayouts from "@/dashboard/components/DashboardLayouts";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUser,
  searchUsers,
} from "../libs/api";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import ConfirmModal from "../components/Modal/ConfirmModal";
import AlertComponent from "../components/Alert";
import InfoModal from "../components/Modal/InfoModal";
import { Button } from "react-bootstrap";
import FormModal from "../components/Modal/FormModal";

interface User {
  id: number;
  image: string;
  firstName: string;
  gender: string;
}

const AllUsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loadedUsersCount, setLoadedUsersCount] = useState<number>(6);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alert, setAlert] = useState<any>({});
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [detailUser, setDetailUser] = useState<User | null>(null);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        let response: User[];
        if (searchQuery) {
          response = await searchUsers(searchQuery);
        } else {
          response = await getAllUsers(loadedUsersCount, 0);
        }
        const data: User[] = response.users;
        setIsLoading(false);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [searchQuery, loadedUsersCount]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query: string = e.target.value;
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    setLoadedUsersCount((prevCount) => prevCount + 6);
  };

  const handleDeleteUser = async () => {
    if (deleteUserId !== null) {
      try {
        await deleteUser(deleteUserId);
        setAlert({
          message: "User deleted successfully!",
          variant: "success",
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } catch (error) {
        console.error("Error deleting user:", error);
        setShowAlert(true);
        setAlert({
          message: "Error deleting user",
          variant: "danger",
        });
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    }
    setShowDeleteModal(false);
    setDeleteUserId(null);
  };

  const showConfirmDeleteModal = (id: number) => {
    setDeleteUserId(id);
    setShowDeleteModal(true);
  };

  const handleShowDetailModal = async (id: number) => {
    try {
      const user = await getUser(id);
      setShowDetailModal(true);
      setDetailUser(user);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleShowFormModal = () => {
    setShowFormModal(true);
  };

  const handleAddUser = async (userData: User) => {
    try {
      const newUser = await addUser(userData);
      setUsers([...users, newUser]);
      setShowFormModal(false);
      setAlert({
        message: "User added successfully!",
        variant: "success",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding user:", error);
      setShowAlert(true);
      setAlert({
        message: "Error adding user",
        variant: "danger",
      });
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <DashboardLayouts title_page={"Dashboard"}>
      <div className="d-flex flex-column-reverse gap-3 gap-sm-0 flex-sm-row align-items-center justify-content-between mb-4">
        <SearchBar
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder={"Enter the first name..."}
        />
        <Button
          onClick={handleShowFormModal}
          size="lg"
          style={{ backgroundColor: "#0e1b6b", color: "white", border: "none" }}
        >
          Add User
        </Button>
      </div>
      <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {users?.map((user) => (
              <div className="col" key={user.id}>
                <Card
                  image={user.image}
                  firstName={user.firstName}
                  isFemale={user.gender === "female"}
                  handleShowConfirmDelete={() =>
                    showConfirmDeleteModal(user.id)
                  }
                  handleShowDetail={() => handleShowDetailModal(user.id)}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <button
        className="btn btn-lg mx-auto my-5"
        style={{ backgroundColor: "#0e1b6b", color: "white", width: "300px" }}
        onClick={handleLoadMore}
      >
        Load More
      </button>
      <ConfirmModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        title={"Delete User"}
        onClick={handleDeleteUser}
      >
        Are you sure you want to delete this user?
      </ConfirmModal>
      <AlertComponent
        onClick={handleCloseAlert}
        show={showAlert}
        variant={alert.variant}
      >
        {alert.message}
      </AlertComponent>
      <InfoModal
        show={showDetailModal}
        onHide={() => setShowDetailModal(false)}
        firstName={detailUser?.firstName}
        lastName={detailUser?.lastName}
        maidenName={detailUser?.maidenName}
        image={detailUser?.image}
        age={detailUser?.age}
        email={detailUser?.email}
        gender={detailUser?.gender}
        birthDate={detailUser?.birthDate}
      />
      <FormModal
        show={showFormModal}
        onHide={() => setShowFormModal(false)}
        onSubmit={handleAddUser}
      />
    </DashboardLayouts>
  );
};

export default AllUsersPage;
