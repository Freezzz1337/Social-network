package socialnetworkbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import socialnetworkbackend.dto.MorePostsDto;
import socialnetworkbackend.dto.UserMeResponseDto;
import socialnetworkbackend.dto.UserSearchDto;
import socialnetworkbackend.models.Post;
import socialnetworkbackend.models.User;
import socialnetworkbackend.repository.PostRepository;
import socialnetworkbackend.repository.UserRepository;
import socialnetworkbackend.util.UserNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class UserService {
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Autowired
    public UserService(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public UserMeResponseDto getUserForProfile(int page, int size) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        PageRequest pageable = PageRequest.of(page, size);
        Page<Post> postPage = postRepository.findByUserOrderByCreateAt(currentUser, pageable);

        UserMeResponseDto userMeResponseDTO = new UserMeResponseDto();
        userMeResponseDTO.setAvatar(currentUser.getAvatar());
        userMeResponseDTO.setFullName(currentUser.getFullName());
        userMeResponseDTO.setPostList(postPage.getContent());

        return userMeResponseDTO;
    }

    public List<MorePostsDto> getMorePosts(int page, int size) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        PageRequest pageable = PageRequest.of(page, size);
        Page<Post> postPage = postRepository.findByUserOrderByCreateAt(currentUser, pageable);

        return postPage.getContent().stream()
                .map(post -> {
                    MorePostsDto mpd = new MorePostsDto();
                    mpd.setId(post.getId());
                    mpd.setCaption(post.getCaption());
                    mpd.setCreateAt(post.getCreateAt());
                    mpd.setImage(post.getImage());
                    return mpd;
                }).collect(Collectors.toList());
    }

    public List<User> getAllUsers() {
        return new ArrayList<>(userRepository.findAll());
    }

    public List<UserSearchDto> getUsersSearch(String searchLine) {
        List<User> usersSearchList = userRepository.findAllByFullNameContaining(searchLine);

        if (usersSearchList.isEmpty()) {
            throw new UserNotFoundException(searchLine);
        }

        return usersSearchList.stream()
                .map(user -> {
                    UserSearchDto usd = new UserSearchDto();
                    usd.setFullName(user.getFullName());
                    usd.setAvatar(user.getAvatar());
                    return usd;
                }).collect(Collectors.toList());
    }
}
