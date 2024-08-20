"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "../modal/ModalLayout";
import useModalStore from "@/app/store/modalStore";

export default function LoginModal() {
  const { closeModal, openModal, isModalOpen } = useModalStore();
  console.log("isModalOpen", isModalOpen);
  return (
    <Modal
      isOpen={isModalOpen}
      title="로그인"
      handleIsOpen={openModal}
      onClose={closeModal}
    >
      <LoginForm />
    </Modal>
  );
}
