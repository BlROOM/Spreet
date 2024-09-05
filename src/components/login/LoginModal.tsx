"use client";
import LoginForm from "./LoginForm";
import Modal from "../modal/ModalLayout";
import useModalStore from "@/store/useModalStore";
import SignupForm from "../signup/SignupForm";
import useLoadingStore from "@/store/useLoading";

export default function LoginModal() {
  const { closeModal, isModalOpen, modalContent, setModalContent } =
    useModalStore();

  return (
    <Modal
      isOpen={isModalOpen}
      title={modalContent === "로그인" ? "로그인" : "회원가입"}
      onClose={closeModal}
    >
      {modalContent === "로그인" ? (
        <LoginForm onSignupClick={() => setModalContent("회원가입")} />
      ) : (
        modalContent === "회원가입" && (
          <SignupForm onCancle={() => setModalContent("로그인")} />
        )
      )}
    </Modal>
  );
}
