package com.amol.garje.SwaggerConfig;

import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    
	
	    Docket getDocket() {
			return new Docket(DocumentationType.SWAGGER_2).groupName("Amol2").apiInfo(ApiInfo()).select().paths(x->x.startsWith("com.amol.garje")).build();
			
			
		}

		private ApiInfo ApiInfo() {
			
			return new ApiInfoBuilder().title("Atul").description("Amol Kailas Garje").build();
		}
	
	
}
