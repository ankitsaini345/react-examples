import { useEffect } from "react";
import { ACTIONS, useStore, userData } from "./reducer";

export default function UseReducerEx() {
    const [{ userDetails, loading, error }, dispatch] = useStore()
    const getUsers = async () => {
        let response = { status: 200, error: false, data: userData }

        if (response.status == 200)
            dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        else
            dispatch({ type: ACTIONS.ERROR, error: response.error });

    };

    useEffect(() => {
        dispatch({ type: ACTIONS.CALL_API });
        getUsers();
    }, [])

    return (
        <>
            {
                loading ? <p> Loading...</p>
                    : error ? <p>{error}</p>
                        : <div>
                            {userDetails.map((user: any) => (
                                <div key={user.id}>
                                    <h3>{user.name} {user.age}</h3>
                                </div>
                            ))}
                        </div>
            }
        </>
    )
}