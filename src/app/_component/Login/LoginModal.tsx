"use client";
import LoginForm from "./LoginForm";
import Modal from "../modal/ModalLayout";
import useModalStore from "@/app/store/modalStore";
import SignupForm from "../signup/SignupForm";

export default function LoginModal() {
  const { closeModal, isModalOpen, isLoginForm, toggleForm } = useModalStore();
  return (
    <Modal
      isOpen={isModalOpen}
      title={isLoginForm ? "로그인" : "회원가입"}
      onClose={closeModal}
    >
      {isLoginForm ? (
        <LoginForm onSignupClick={toggleForm} onCancle={closeModal} />
      ) : (
        <SignupForm onCancle={toggleForm} />
      )}
    </Modal>
  );
}
