import ConfirmBtn from "../layout/confirmBtn"
export default function ConfirmBtns () {
    return (
        <div className="flex justify-center mt-14 mb-48">
            <ConfirmBtn label="탈퇴하기" color="bg-lightgrey" />
            <ConfirmBtn label="수정하기" color="bg-primary" />
        </div>  
    )
}