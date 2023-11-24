package socialnetworkbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import socialnetworkbackend.models.PostImage;

@Repository
public interface PostImageRepository extends JpaRepository<PostImage, Long> {
}
