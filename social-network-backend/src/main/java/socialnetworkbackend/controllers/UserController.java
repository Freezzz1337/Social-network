package socialnetworkbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import socialnetworkbackend.dto.MorePostsDto;
import socialnetworkbackend.dto.UserMeResponseDto;
import socialnetworkbackend.dto.UserSearchDto;
import socialnetworkbackend.models.User;
import socialnetworkbackend.services.UserService;

import java.util.List;

@RequestMapping("/user")
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/userForProfile")
    public ResponseEntity<UserMeResponseDto> getUserForProfile(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size) {
        return ResponseEntity.ok(userService.getUserForProfile(page, size));
    }

    @GetMapping("/userForProfile/morePosts")
    public ResponseEntity<List<MorePostsDto>> getMorePosts(
            @RequestParam int page,
            @RequestParam(defaultValue = "6") int size) {
        return ResponseEntity.ok(userService.getMorePosts(page, size));
    }


    @GetMapping("/")
    public ResponseEntity<List<User>> allUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }


    @GetMapping("/search")
    public ResponseEntity<List<UserSearchDto>> getUsersSearch(@RequestParam String searchLine) {
        return ResponseEntity.ok(userService.getUsersSearch(searchLine));
    }
}


