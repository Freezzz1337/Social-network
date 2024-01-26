package socialnetworkbackend.dto;

import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class MorePostsDto {
    private long id;
    private String caption;
    private Timestamp createAt;
    @Lob
    private byte[] image;
}
