package socialnetworkbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import java.util.Base64;

@SpringBootApplication
public class SocialNetworkBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SocialNetworkBackendApplication.class, args);
	}

	@Bean
	public Base64.Encoder base64Encoder() {
		return Base64.getEncoder();
	}
}
