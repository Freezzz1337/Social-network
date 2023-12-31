package socialnetworkbackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import socialnetworkbackend.dto.LoginUserDto;
import socialnetworkbackend.dto.RegisterUserDto;
import socialnetworkbackend.dto.RegisterUserResponseDto;
import socialnetworkbackend.models.User;
import socialnetworkbackend.dto.LoginResponseDto;
import socialnetworkbackend.services.AuthenticationService;
import socialnetworkbackend.services.JwtService;

import java.util.Base64;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<RegisterUserResponseDto> register(@RequestBody RegisterUserDto registerUserDto) {
        authenticationService.signup(registerUserDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new RegisterUserResponseDto());
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponseDto loginResponseDto = new LoginResponseDto();
        loginResponseDto.setToken(jwtToken);
        loginResponseDto.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponseDto);
    }

}