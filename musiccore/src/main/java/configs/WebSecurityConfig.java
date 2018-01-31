package configs;

import filters.JWTAuthenticationFilter;
import filters.JWTLoginFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//@Autowired
    private DataSource dataSource= new DataSourceConfig().dataSource();
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/inline.bundle.js").permitAll()
                .antMatchers("/main.bundle.js").permitAll()
                .antMatchers("/polyfills.bundle.js").permitAll()
                .antMatchers("/styles.bundle.js").permitAll()
                .antMatchers("/vendor.bundle.js").permitAll()
                .antMatchers("/assets/icon/*").permitAll()
                .antMatchers("/favicon.ico").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.GET,"/greeting").hasAnyAuthority("ROLE_USER","ROLE_ADMIN")
                .antMatchers(HttpMethod.GET,"/vipsongs").hasAnyAuthority("ROLE_ADMIN")
                .antMatchers(HttpMethod.GET,"/songs").hasAnyAuthority("ROLE_USER","ROLE_ADMIN")
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

             auth.jdbcAuthentication().dataSource(dataSource)
               .usersByUsernameQuery("select username,password,true as enabled from users where username=?")
               .authoritiesByUsernameQuery("select username, role from users where username=?");

    }
}
