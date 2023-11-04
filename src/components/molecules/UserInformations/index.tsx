
import UserAvatar from "@/components/atoms/UserAvatar";
import TextInfo from "@/components/atoms/TextInfo";
import { IUserInformation } from "./UserInformation.interface";

export default function UserInformations({userName}: IUserInformation){
    return (
    <>
                <div className="items-center justify-center flex flex-col">
                    <UserAvatar />
                    <TextInfo info={userName} />
                </div>                
    </>
    )
}