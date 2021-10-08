import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AlertModal = {
  mostrarMensajeExitoso: (title, text) => MySwal.fire(title, text, "success"),
  mostrarMensajeFallido: (title, text) => MySwal.fire(title, text, "error"),
  mostrarMensajePersonalizado: ({ title, text, buttonText, icon }) =>
    MySwal.fire({
      title,
      text,
      icon, // success | error | info | question
      confirmButtonText: buttonText,
    }),
  confirmar: ({
    title,
    text,
    confirmButtonText,
    cancelButtonText,
    tituloCuadroResultado,
    mensajeCuadroResultado,
  }) =>
    Swal.fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText,
      cancelButtonText,
    }).then((result) => {
      if (result.isConfirmed)
        MySwal.fire(tituloCuadroResultado, mensajeCuadroResultado, "success");
      if (result.isDenied)
        MySwal.fire("Proceso Fallido", "Ocurrio un error inesperado", "error");
    }),
  mensajeTemporizado: (title, text, timer, icon) => {
    Swal.fire({ title, text, timer, icon });
  },
  mensajeConImagen: (
    title,
    text,
    imageUrl,
    imageWidth,
    imageHeight,
    imageAlt
  ) => {
    Swal.fire({
      title,
      text,
      imageUrl,
      imageWidth,
      imageHeight,
      imageAlt,
    });
  },
};

export default AlertModal;
