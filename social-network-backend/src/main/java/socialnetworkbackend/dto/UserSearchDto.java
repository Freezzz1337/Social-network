package socialnetworkbackend.dto;

import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSearchDto {
    private String fullName;
    @Lob
    private byte[] avatar;

}
