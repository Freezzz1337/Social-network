package socialnetworkbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:3000")
						.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH")
						.allowedHeaders("*")
						.allowCredentials(true)
						.maxAge(3600);
			}
		};
	}
}
