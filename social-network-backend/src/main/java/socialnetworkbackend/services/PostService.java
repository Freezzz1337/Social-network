package socialnetworkbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import socialnetworkbackend.dto.PostDto;
import socialnetworkbackend.models.Post;
import socialnetworkbackend.models.User;
import socialnetworkbackend.repository.PostRepository;

import java.sql.Timestamp;
import java.util.Base64;

@Service
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Transactional
    public void createPost(PostDto newPost) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        Post post = new Post();

        post.setCaption(newPost.getCaption());
        post.setImage(convertToByteArray(newPost.getImage()));
        post.setCreateAt(new Timestamp(System.currentTimeMillis()));
        post.setUser(currentUser);

        postRepository.save(post);
    }

    private byte[] convertToByteArray(String base64) {
        return Base64.getDecoder().decode(base64);
    }
}
