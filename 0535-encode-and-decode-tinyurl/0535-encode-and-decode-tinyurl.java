import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class Codec {

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        return Base64.getEncoder().encodeToString(longUrl.getBytes());
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        return new String(Base64.getDecoder().decode(shortUrl), StandardCharsets.UTF_8);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));