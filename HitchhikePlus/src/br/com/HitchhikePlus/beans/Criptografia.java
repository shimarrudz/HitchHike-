package br.com.HitchhikePlus.beans;

import java.math.BigInteger;
import java.security.MessageDigest;

public class Criptografia {

    public Criptografia() {
    }

    public static String encriptacao(String senha) {
        String retorno = "";
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("MD5");
            BigInteger hash = new BigInteger(1, md.digest(senha.getBytes()));
            retorno = hash.toString(16);
        }
        catch (Exception e) {}

        return retorno;
    }
}