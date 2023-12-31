import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Discover({ detail }) {
  
  const navigate = useNavigate();

  function handleStartChat() {
    // GO TO PRIVATE CHAT WITH THE CHAT ID
    // navigate('/app/chat/:id')
    navigate("/login");
  }
  return (
    <div className="my-2">
      <div className="bg-grey px-3 pb-7 w-[12rem] h-max rounded-md my-2 ">
        <div className="absolute translate-y-[-1.5rem]">
          <Avatar style={{ width: 30, height: 30 }} src={detail.image} />
        </div>

        {/* <div className="relative translate-y-[1rem] space-y-2"> */}
        <div className="flex flex-col justify-between relative top-6 gap-3">
          <div className="space-y-1 border-b-2 p-b-1">
            <h2 className="text-base font-semibold text-lightBlue tracking-wider">
              {detail.firstName} {detail.lastName}
            </h2>

            <h3 className="text-black text-sm font-bold tracking-wider">
              Psychologist
            </h3>

            <h5 className="text-black font-light text-xs tracking-widest">
              Redcross
            </h5>
          </div>

          <Stack direction="row" spacing={1}>
            <Avatar style={{ width: 30, height: 30 }} />
            <Avatar style={{ width: 30, height: 30 }} />
            <Avatar style={{ width: 30, height: 30 }} />
          </Stack>

          {/* <button
            className="border border-lightBlue rounded-md text-lightBlue px-2 py-1 my-3"
            onClick={handleStartChat}
          >
            Talk to {detail.firstName}
          </button> */}
          <a
            href={`https://wa.me/${detail.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to {detail.firstName}
          </a>
        </div>
      </div>
    </div>
  );
}
