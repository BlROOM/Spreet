import Swal from 'sweetalert2';

type AlertIcon = 
     "warning" | "success" | "error"

function sweetAlert(timer: number, icon : AlertIcon, title: string): void {
  Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  }).fire({
    icon,
    title,
  });
}

export default sweetAlert;
