import Swal from 'sweetalert2';

export const successAlert = (title, message, action = () => {}) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'success',
    confirmButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};

export const errorAlert = (title, message, action = () => {}) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};
