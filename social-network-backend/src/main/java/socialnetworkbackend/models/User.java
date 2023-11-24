package socialnetworkbackend.models;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "user")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Lob
    @Column(name = "avatar")
    private byte[] avatar;

    @Column(name = "create_at")
    private Timestamp create_at;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Post> postList;
}
