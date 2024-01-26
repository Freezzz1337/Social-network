package socialnetworkbackend.dto;

import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.Setter;
import socialnetworkbackend.models.Post;

import java.util.List;

@Getter
@Setter
public class UserMeResponseDto {
    private String fullName;
    @Lob
    private byte[] avatar;
    private List<Post> postList;
}
