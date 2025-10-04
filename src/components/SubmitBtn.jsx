import { useNavigation } from "react-router";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-ring">Загрузка...</span>
        </>
      ) : (
        text || "Подтвердить"
      )}
    </button>
  );
}

export default SubmitBtn;
