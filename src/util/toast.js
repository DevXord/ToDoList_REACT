import iziToast from 'izitoast';


const ToastSuccess = (message, timeout=5000) => {
    iziToast.success({
      title: 'Success',
      message: message,
      timeout:timeout,
      position: 'topRight'
    });
  };

  const ToastError = (message, timeout=5000) => {
    iziToast.error({
      title: 'Error',
      message: message,
      timeout:timeout,
      position: 'topRight'
    });
  };

  const ToastWarning = (message, timeout=5000) => {
    iziToast.warning({
      title: 'Warning',
      message: message,
      timeout:timeout,
      position: 'topRight'
    });
  };

export {ToastSuccess, ToastError, ToastWarning}