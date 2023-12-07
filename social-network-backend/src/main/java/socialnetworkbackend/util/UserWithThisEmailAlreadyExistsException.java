package socialnetworkbackend.util;

public class UserWithThisEmailAlreadyExistsException extends RuntimeException{
    public UserWithThisEmailAlreadyExistsException() {
        super("Email already taken");
    }
}
