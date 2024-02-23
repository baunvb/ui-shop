import { apiHandler } from "../../../server/helpers";
import { usersRepo } from "../../../server/user/user.repo";

export default apiHandler({
    post: register
});

async function register(req, res) {
    await usersRepo.create(req.body);
    return res.status(200).json({});
}