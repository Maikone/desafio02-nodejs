import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    if (!user) throw new Error("User not found");
    if (!user.admin) throw new Error("User is not admin");

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
