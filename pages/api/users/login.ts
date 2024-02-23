import { apiHandler } from "../../../server/helpers";
import { usersRepo } from "../../../server/user/user.repo";

export default apiHandler({
    post: login
});

async function login(req, res) {
    const user = await usersRepo.login(req.body);
    return res.status(200).json(user);
}