package org.springframework.samples.petclinic.configuration;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import io.github.isagroup.PricingContext;

@Component
public class PricingConfiguration extends PricingContext{

    @Override 
    public String getJwtSecret(){ 
        return "mySecret"; 
    }
    
    @Override 
    public String getConfigFilePath(){ 
        return "pricing/pricing.yml"; 
    }
    @Override 
    public Object getUserAuthorities() {
        Map<String, String> authorities = new HashMap<>();
        authorities.put("role", "OWNER");
        return authorities; 
    }
    
    @Override public Map<String, Object> getUserContext() {
        Map<String, Object> userContext = new HashMap<>();
        // Add the logic to retrieve all the data needed within the user context,
        // such as his current usage of the feature XXX.
        return userContext; 
    }
    
    @Override public String getUserPlan() {
        // Should be replace by the logic that returns the plan name of the current user.
        return "BASIC"; 
    }
    
}
