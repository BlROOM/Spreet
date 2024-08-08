export default function LoginModal() {
  return (
    <dialog
      className="fixed h-2/3 w-1/4 z-10 inset-0 overflow-y-auto border rounded-lg p-10"
      open
    >
      <div className="flex items-center justify-center text-center sm:block">
        <div className="flex justify-center">
          <div className="mt-3 flex flex-col items-center justify-center">
            <h2 className="text-2xl leading-6 font-medium text-gray-900 ">
              로그인
            </h2>
            <div className="mt-2">
              <p className="text-sm text-gray-500">로그인 정보를 입력하세요.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          type="button"
          className="w-2/5 rounded-md border shadow-sm px-6 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          로그인
        </button>
        <button
          type="button"
          className="w-2/5 rounded-md border shadow-sm px-6 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          취소
        </button>
      </div>
    </dialog>
  );
}
