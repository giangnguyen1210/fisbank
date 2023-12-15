package com.fisbank.security;

import com.fisbank.dto.response.UserResponse;
import com.fisbank.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserMapper userMapper;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserResponse user = userMapper.findByEmail(username);
//        return User.builder()
//                .username(user.getEmail())
//                .password(user.getPassword())
//                .roles(String.valueOf(user.getRole())).build();
//    }
@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserResponse user = userMapper.findByEmail(username);

    if (user == null) {
        throw new UsernameNotFoundException("User not found with username: " + username);
    }

    Set<GrantedAuthority> authorities = new HashSet<>();
    // Assuming user.getRole() returns the role name (e.g., "ADMIN")
    authorities.add(new SimpleGrantedAuthority(String.valueOf(user.getRoleId())));

    return new org.springframework.security.core.userdetails.User(
            user.getEmail(),
            user.getPassword(),
            authorities
    );
}
}
