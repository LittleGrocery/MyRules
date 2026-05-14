function FindProxyForURL(url, host) {
    // 优先第一个SOCKS5，不通自动切第二个，都不通就直连
    return "SOCKS5 192.168.1.50:7890; SOCKS5 192.168.1.100:7890; DIRECT";
}
