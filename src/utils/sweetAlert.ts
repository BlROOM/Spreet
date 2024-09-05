import Swal from "sweetalert2";

type AlertIcon = "warning" | "success" | "error";

function sweetAlert(
  timer: number,
  icon: AlertIcon,
  title: string,
  width: number = 400
): void {
  Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer,
    width,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon,
    title,
  });
}

export default sweetAlert;
