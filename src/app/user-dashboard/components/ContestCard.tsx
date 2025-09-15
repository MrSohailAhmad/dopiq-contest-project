import { Clock, Star, Users } from "lucide-react";

interface ContestCardProps {
  title: string;
  prize: string;
  rating: number;
  entries: number;
  timeLeft: string;
  status: "open" | "closed";
  type: "active" | "invitation";
  category?: string;
  invitedBy?: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
}

export const ContestCard = ({
  title,
  prize,
  rating,
  entries,
  timeLeft,
  type,
  category,
  invitedBy,
  buttonText,
  buttonVariant = "primary",
}: ContestCardProps) => {
  const isInvitation = type === "invitation";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200">
      {/* Header */}

      <div className="bg-black dark:bg-blue-500 text-white p-4 flex items-center justify-between">
        <h3 className="text-white font-semibold">{category}</h3>
        <span className="text-white font-bold">{prize}</span>
      </div>

      <div
        className={`flex items-center justify-between px-10 !py-5 pt-5 ${
          type === "active" ? "flex-col gap-10" : ""
        }`}
      >
        <div className={`flex items-center justify-between `}>
          <div className="flex-1">
            {type === "active" && (
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 text-gray-300" />
                  <span className="ml-1">{rating}/5 Rating</span>
                </div>
                {/* <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  status === "open"
                    ? "bg-status-success/10 text-status-success"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                • {status.charAt(0).toUpperCase() + status.slice(1)}
              </div> */}
              </div>
            )}
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {title}
            </h4>
            {invitedBy && (
              <p className="text-sm font-light text-muted-foreground mb-2">
                Invited by: {invitedBy}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-green-500" />
                <span className="text-green-500">{entries} entries</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{timeLeft}</span>
              </div>
            </div>
          </div>

          {/* {!isInvitation && (
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{prize}</div>
            </div>
          )} */}
        </div>

        <div className={`flex gap-3 ${type === "active" && "w-full"}`}>
          {isInvitation ? (
            <>
              <button className="flex-1 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium transition-colors">
                Accept
              </button>
              <button className="flex-1 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full font-medium transition-colors">
                Decline
              </button>
            </>
          ) : (
            <button
              className={`flex-1 py-2 w-full px-6 rounded-full font-medium transition-colors ${
                buttonVariant === "primary"
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
