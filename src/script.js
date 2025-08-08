  gridB = nextB;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(gridA, config.gridA.color);
  drawGrid(gridB, config.gridB.color);

  requestAnimationFrame(step);
}

window.addEventListener("resize", resize);
resize();
step();
</script>

</body></html>